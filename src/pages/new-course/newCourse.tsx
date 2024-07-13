import { Button, Form } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { postDiscipline } from "../../services"

export const NewCourse = () => {

  
  
  const { register, handleSubmit, formState: { errors }} = useForm({
    defaultValues: {
      name: 'Nome',
      courseWorkload:  '99' ,
      professor: '',
      status: '',
      description: ''
    }
  })
// name: 
// courseWorkload: 
// professor: 
// status:
// description: 

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const onSubmit = async (data: any) => {
  await postDiscipline(data)
}  


  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Nome do cruso</Form.Label>
        <Form.Control type="text" {...register("name", { required: true })} />
        {errors.name ? <span style={{color: 'red'}}>Nome é obrigatório</span> : null}
      </Form.Group>
      

      <Form.Group className="mb-3" controlId="courseWorkload">
        <Form.Label>Carga Horária</Form.Label>
        <Form.Control type="text" {...register("courseWorkload", { required: true })} />
        {errors.courseWorkload ? <span style={{color: 'red'}}>Carga Horária é obrigatória</span> : null}
      </Form.Group>

      <Form.Group className="mb-3" controlId="range">
        <Form.Label>Range</Form.Label>
        <Form.Control type="number" {...register("range", { required: true, min: 18, max: 99 })} />
        {errors.range ? <span style={{color: 'red'}}>Range tem que ser no minimo 18 e no maximo 99</span> : null}
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" 
          {...register("email", { 
            required: true,
            pattern:{
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format"
              }
          })} 
        />
        {/* {console.log('errors', errors.email)} */}
        {/* {errors.courseWorkload ? <span style={{color: 'red'}}>Carga Horária é obrigatória</span> : null} */}
      </Form.Group>

       <Form.Group className="mb-3" controlId="professor">
        <Form.Label>Professor</Form.Label>
        <Form.Control type="text" {...register("professor")} />
      </Form.Group>
      <Form.Select aria-label="status" {...register("status")}>
        <option>Selecione</option>
        <option value="Obrigatório">Obrigatório</option>
        <option value="Não Obrigatório">Não Obrigatório</option>
      </Form.Select>
      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} {...register("description")} />
      </Form.Group>
      <Button type="submit">Salvar</Button>
    </Form>
  )
}