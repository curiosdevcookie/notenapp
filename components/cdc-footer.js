
class Footer extends HTMLElement {
  constructor() {
    super();
    let shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <section>
        <p>β¨ Built in πͺπΊπ©πͺβ¦  with copious amounts of [π«, π§  , βοΈ , π] by <a href='https://twitter.com/curiosdevcookie'> @curiosdevcookie</a> .β¨</p>
      </section>
    `;
  }
}
customElements.define('cdc-footer', Footer);