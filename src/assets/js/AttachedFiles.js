class AttachedFiles {
  constructor(container) {
    this.container = container;
    this.input = this.container.querySelector('input[type="file"]');
    this.fileListContainer = this.container.querySelector(`.attached-files`);

    document.addEventListener('change', (event) => {
      if (event.target.closest('.js-attached-files')) {
        this.handleChange(event);
      }
    });
    document.addEventListener('click', (event) => {
      if (event.target.closest('.attached-files__item-delete')) {
        this.handleRemove(event);
      }
    });
    this.fileList = [];
  }

  handleChange() {
    const fileList = [...this.input.files];
    this.fileList = fileList;
    this.updateInput();
    this.renderFileList();
  }

  handleRemove(event) {
    const { index } = event.target.closest('.attached-files__item-delete').dataset;

    this.fileList.splice(Number(index), 1);

    this.updateInput();
    this.renderFileList();
  }

  renderFileList() {
    const svgClose = `
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_970_5261)">
          <path d="M6.58691 6.74731L9.41534 9.57574" stroke="#0B0F16" stroke-linecap="round"/>
          <path d="M9.41504 6.74731L6.58661 9.57574" stroke="#0B0F16" stroke-linecap="round"/>
          <circle cx="8.00065" cy="7.99992" r="6.16667" stroke="#0B0F16"/>
          </g>
          <defs>
          <clipPath id="clip0_970_5261">
          <rect width="16" height="16" fill="white"/>
          </clipPath>
          </defs>
        </svg>      
    `;
    this.fileListContainer.innerHTML = '';
    this.fileList.forEach((file, index) => {
      const fileContainer = document.createElement('div');
      fileContainer.classList.add('attached-files__item');
      fileContainer.innerHTML = `<div class="attached-files__item-name">${file.name}</div> <button type="button" class="attached-files__item-delete" data-index="${index}">${svgClose}</button>`;
      this.fileListContainer.appendChild(fileContainer);
    });
  }

  updateInput() {
    const dataTransfer = new DataTransfer();
    this.fileList.forEach((file) => {
      dataTransfer.items.add(file);
    });
    this.input.files = dataTransfer.files;

    if (this.input.files.length > 0) {
      this.input.closest('.js-attached-files').querySelector('.feedback-form__label-file').classList.add('has-files');
    } else {
      this.input.closest('.js-attached-files').querySelector('.feedback-form__label-file').classList.remove('has-files');
    }
  }
}

document.querySelectorAll('.js-attached-files').forEach((elem) => new AttachedFiles(elem));

const observer = new MutationObserver(() => {
  document.querySelectorAll('.js-attached-files').forEach((elem) => new AttachedFiles(elem));
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
  characterDataOldValue: true,
});
