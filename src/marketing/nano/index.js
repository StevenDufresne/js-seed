export class Nanobar {
  constructor(serverConfig) {
    this.config = serverConfig;
    this.appendTemplate();
  }

  getTemplate(nanoData) {
    const style = `background:${nanoData.options.style.bg}`;

    return `<div style=${style} class="lc lc-nano">
              <div class="lc-nano-inner">
                <p>${nanoData.content.text}</p>
              </div>
              <span class="lc-nano-close">x</span>
           </div>`
  }

  appendTemplate() {
    const handle = document.querySelector('body');
    const container = document.createElement('div');

    container.innerHTML = this.getTemplate(this.config);

    handle.insertBefore(container, handle.children[0]);
    this.modifySibling(container)
    this.bindClose(container);
  }

  modifySibling(container) {
    const offset = container.children[0].offsetHeight;
    container.nextSibling.style.marginTop = offset + 'px';
  }

  bindClose(container) {
    const close = document.querySelector('.lc-nano-close');
    const parent = document.querySelector('.lc-nano');

    close.addEventListener('click', function () {
      container.removeChild(parent);
      container.nextSibling.style.marginTop = 0;
    })
  }
}

export default Nanobar;