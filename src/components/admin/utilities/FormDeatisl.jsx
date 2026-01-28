import { useEffect, useState } from 'react'
import axios from 'axios'
const API_URL = import.meta.env.VITE_BACKEND_URI;

 export default function FormDetails() {
  return <>
  <div>
    <Order uri={`${API_URL}form`} name="Form" />
  </div>
  </>
}
 
 
 function Order({ uri, name }) {
    const [data, setdata] = useState([])
    const [show,setshow] = useState(true)
    
    
    const fectchdata = async () => {
      try {
        const response = await axios.get(uri)
        setdata(response.data)
        setshow(true)
      }
      catch (err) {
        setshow(false)
        console.log('server sleeping ... retrying')
        setTimeout(fectchdata, 1000)
      }
    }
    useEffect(() => {
      fectchdata()
    }, [])
    
    return (
      <>
            <div className=''>
                <h2 className='pl-10 text-md md:text-lg lg:text-xl mb-4   capitalize '>{name} details</h2>
                <div>
                    {show ?
                          <div class="flex flex-col  ">
<div class=" overflow-x-auto">
    <div class="min-w-full inline-block align-middle">
        <div class="overflow-hidden border rounded-lg border-gray-300">
            <table class=" min-w-full  rounded-xl">
                <thead>
                    <tr class="bg-gray-50">
                        <th scope="col" class="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"> no </th>
                        <th scope="col" class="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"> name </th>
                        <th scope="col" class="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"> email ID </th>
                        <th scope="col" class="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"> service </th>
                        <th scope="col" class="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"> budget price </th>
                        <th scope="col" class="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"> message </th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-300 ">
                  {data.map((item)=>(
                       <tr>
                        <td class="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 "> {item._id}</td>
                        <td class="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> {item.name} </td>
                        <td class="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> {item.email}</td>
                        <td class="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> {item.service}</td>
                        <td class="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> {item.budget}</td>
                        <td class="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> {item.message}</td>
                    </tr>
                  ))}
                   
                </tbody>
            </table>
        </div>
    </div>
</div>
</div>
                        : <p>loading......</p>}
                </div>
            </div>
           

        </>
    )
  }