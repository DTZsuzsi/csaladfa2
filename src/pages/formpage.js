import { Link } from "react-router-dom"
import InputField from "../components/InputField"
import { useState } from "react"


function FormPage(){
    const [firstName, setFirstName]=useState('')
    const [lastName, setLastName]=useState('')
    const [birthday, setBirthday]=useState('')
    const [imageSrc, setImageSrc]=useState('')
    const [relative, setRelative]=useState('')

    function handleSubmit(e) {
        e.preventDefault();
        const data = { first_name:firstName, last_name:lastName, birthday:birthday,image:imageSrc, relative:relative};
        fetch('/api/member', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      }


return( <div> 
    <Link to='/'>
        <button> BACK TO HOME</button>
    </Link>
<form onSubmit={handleSubmit}>
    <InputField name='first_name' onChange={(e)=>setFirstName(e.target.value)
    }></InputField>
    <InputField name='last_name' onChange={(e)=>setLastName(e.target.value)
    }></InputField>
    <InputField name='birthday' onChange={(e)=>setBirthday(e.target.value)
    }></InputField>
    <InputField name='image' onChange={(e)=>setImageSrc(e.target.value)
    }></InputField>
    <InputField name='relative' onChange={(e)=>setRelative(e.target.value)
    }></InputField>
    <button type='submit'> Submit </button>
</form>

</div>
)
}

export default FormPage