import axios from 'axios'
import { Formik } from 'formik'
import React from 'react'

const Add = () => {
  return (
    <div style={{padding:"100px 0px"}}>
          <Formik 
       initialValues={{ email: '', password: '' }}
      
       onSubmit={(values, { setSubmitting }) => {
         axios.post("http://localhost:5000/products",{
          title:values.title,
          price:values.price,
          image:values.image
         })
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
           <input
             type="text"
             name="title"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.title}
           />
           {errors.title && touched.title && errors.title}
           <input
             type="number"
             name="price"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.price}
           />
           {errors.price && touched.price && errors.price}
           <input
             type="text"
             name="image"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.image}
           />
           {errors.image && touched.image && errors.image}
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
    </div>
  )
}

export default Add