import { useTranslation } from 'next-i18next'
//import { t } from "i18next";
//import i18n from 'i18next';
import i18n from '/i18n';



//const { t } = useTranslation('common')
console.log("==============");
console.log(i18n.t('notFoundDescription'));
console.log("==============");

const form = {
    formId: "testform",
    formField: {
      title: {
        name: "title inside test to Delete"
      }
    }
  }

export default form;


/*import i18next from "i18next";

const form = () => {
  const result = i18next.t("notFoundDescription");
  console.log(result);
  return result;
};

export default form;




//import { i18n } from '/i18n';
/*import i18n from '/i18n';

const myExport = {};

function fill() {
  myExport.foo = i18n.t('notFoundDescription');
}

// run it initial
fill();

// bind some events and fill values again (doing the magic you expect to happen magically)
i18n.on('languageChanged init',() => {
  fill(); // fills myExport with new value for foo based on current i18n lng
});

console.log("myExport.foo");
console.log(myExport.foo);
// export the const
export default myExport;
*/
