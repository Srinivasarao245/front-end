import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useAddStudentMutation } from '../services/StudentsApi';
import { useNavigate } from 'react-router-dom';

function AddStudents() {
    var [ addStudentFn ] = useAddStudentMutation();
    var navigate = useNavigate()
  return (
    <div>
      <Formik
        initialValues={{ name: '', gender: '', age: '', weight: '' }}
        onSubmit={(values) => { console.log(values);
          addStudentFn(values).then(res=>navigate('/')).catch(err=>console.log(err))
          // Optionally add functionality to reset the form or show a success message
        }}
      >
        {() => (
          <div>
                    {/* <Form>
                        <Field name="name"/><br />
                        <Field name="gender" /><br />
                        <Field name="age"/><br />
                        <Field name="weight" /><br />
                        <button>Submit</button>
                    </Form> */}
            <Form>
              <div>
                <label htmlFor="name">Name:</label>
                <Field type='text' id="name" name="name" />
              </div>
              <div>
                <label htmlFor="gender">Gender:</label>
                <Field type='text' id="gender" name="gender" />
              </div>
              <div>
                <label htmlFor="age">Age:</label>
                <Field id="age" name="age" type="number" />
              </div>
              <div>
                <label htmlFor="weight">Weight:</label>
                <Field id="weight" name="weight" type="number" />
              </div>
              <button type="submit">Submit</button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}
export default AddStudents;
