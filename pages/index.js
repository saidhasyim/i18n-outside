import React from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

//the below are for testing only. to delete
import checkout from "/pocTranslate";


/*const {
  formField: {
    title
  },
} = checkout;*/
const {
  formField: {
    title
  },
} = checkout;
//const {form} = checkout;

//console.log("title.name===============");
//console.log(title.name);


const Home = () => {
 
  return (
    <></>
  )
}

 export const getStaticProps = async ({ locale }) => {
  //export const getStaticProps = async () => {
  try {
    return {
      props: {
        ...(await serverSideTranslations(locale, ['common'])),
      },
    }
  } catch (err) {
    console.log(err)
  }
}

export default Home
