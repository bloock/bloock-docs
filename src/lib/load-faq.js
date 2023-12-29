import yaml from 'js-yaml';
import faqString from '!!raw-loader!../pages/faq.yaml';

const faq = yaml.load(faqString);

export default faq;
