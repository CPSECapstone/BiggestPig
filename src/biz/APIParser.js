import formGenerator from '../components/form';

export function parseJson(apiReturn) {
  const jsonObj = JSON.parse(apiReturn);

  const components = jsonObj.components;
  for (const comp in components) {
    if (comp === 'form') {
      return formGenerator(components.form);
    } else {
      console.error('Cannot parse given component: ' + comp);
    }
  }
}
