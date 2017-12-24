import Ajax from './ajax';
import factory from './factory';

export class Core {
  constructor() {
    const preInfo = this.getPreflightInfo();
    const layers = [];

    this.getStyles();

    Ajax.get('//localhost:4567/payload', {id: '5a3f4f6568750c0a19118dd5'}, {})
      .then((res)=> {  
        const data = JSON.parse(res);
        if(data.length > 0) {
          factory.renderComponents(data);
        }
      }).catch((err)=> {
          console.log(err);
      });
  }

  getPreflightInfo() {
    return  {
      'href': window.location.href,
    }
  }

  getStyles(){
    const styles = document.createElement('link');
    styles.rel = 'stylesheet';
    styles.type = 'text/css';
    styles.media = 'screen';
    styles.href = '//localhost:4567/src/css/style.css';
    document.getElementsByTagName('head')[0].appendChild(styles);
  }
}

export default Core;