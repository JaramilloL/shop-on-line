//usamos el hook de react-hook-form para guardar los datos del formulario y despues trabajarlo
import { useForm } from "react-hook-form";
//vamos a usar un id unico para cada una de ls concultas
import { v4 as uuidv4 } from "uuid";
//importamos desde firebase las colleccones y el documento para el envio de daos
import { collection, addDoc } from "firebase/firestore";
import { bd } from "../../firebase/firebaseConfig";

const FormAnimal = () => {
  //desestructuramos las funciones que vienen desde react-hook-form
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
    getValues,
  } = useForm();

  //creamos la funcion que enviara los datos
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  const getVeters = async () => {
    const nameAnimal = getValues("nameAnimal");
    const typeAnimal = getValues("typeAnimal");
    const breed = getValues("breed");
    const age = getValues("age");
    const gender = getValues("gender");
    const color = getValues("color");
    const kilograms = getValues("kilograms");
    const vaccibes = getValues("vaccibes");
    const allergies = getValues("allergies");
    const reason = getValues("reason");
    const description = getValues("description");
    const id = uuidv4();
    try {
      console.log(
        nameAnimal,
        typeAnimal,
        breed,
        age,
        gender,
        color,
        kilograms,
        vaccibes,
        allergies,
        reason,
        description,
        id
      );
      const getData = await addDoc(collection(bd, "veterinaria"), {
        id: id,
        nameAnimal: nameAnimal,
        typeAnimal: typeAnimal,
        breed: breed,
        age: age,
        gender: gender,
        color: color,
        kilograms: kilograms,
        vaccibes: vaccibes,
        allergies: allergies,
        reason: reason,
        description: description,
      });
      console.log(getData.id);
      reset();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <h3>Form Animal</h3>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="formName" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="formName"
            placeholder="name..."
            name="nameAnimal"
            {...register("nameAnimal", {
              required: {
                value: true,
                message: "Please enter a name",
              },
              minLength: {
                value: 5,
                message: "Please enter more than 5 characters",
              },
              maxLength: {
                value: 25,
                message: "Please enter less than 25 characters",
              },
            })}
          />
          <p className="text-center text-danger">
            {errors?.nameAnimal?.message}
          </p>
        </div>
        <div className="mb-3">
          <label className="form-label">Select specie:</label>
          <select
            className="form-select"
            aria-label="Default select example"
            name="typeAnimal"
            {...register("typeAnimal", {
              required: {
                value: true,
                message: "Please enter a typeAnimal",
              },
            })}
          >
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Bird">Bird</option>
          </select>
          <p className="text-center text-danger">
            {errors?.typeAnimal?.message}
          </p>
        </div>
        <div className="mb-3">
          <label htmlFor="formBread" className="form-label">
            Breeds:
          </label>
          <input
            type="text"
            className="form-control"
            id="formBread"
            placeholder="Raza"
            name="breed"
            {...register("breed", {
              required: {
                value: true,
                message: "Please enter a breed",
              },
              minLength: {
                value: 3,
                message: "Please enter more than 3 characters",
              },
              maxLength: {
                value: 25,
                message: "Please enter less than 25 characters",
              },
            })}
          />
          <p className="text-center text-danger">{errors?.breed?.message}</p>
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleFormConformAgetrolInput1"
            className="form-label"
          >
            Age:
          </label>
          <input
            type="number"
            className="form-control"
            id="formAge"
            placeholder="name..."
            name="age"
            {...register("age", {
              required: {
                value: true,
                message: "Please enter a age",
              },
            })}
          />
          <p className="text-center text-danger">{errors?.age?.message}</p>
        </div>
        <div className="mb-3">
          <label className="form-label">Gender:</label>
          <select
            className="form-select"
            aria-label="Default select example"
            name="gender"
            {...register("gender", {
              required: {
                value: true,
                message: "Please enter a gender",
              },
            })}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Stranger">Stranger</option>
          </select>
          <p className="text-center text-danger">{errors?.gender?.message}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="formColor" className="form-label">
            Color:
          </label>
          <input
            type="text"
            className="form-control"
            id="formColor"
            placeholder="color..."
            name="color"
            {...register("color", {
              required: {
                value: true,
                message: "Please enter a color",
              },
            })}
          />
          <p className="text-center text-danger">{errors?.color?.message}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="formKl" className="form-label">
            Kilograms:
          </label>
          <input
            type="number"
            className="form-control"
            id="formKl"
            placeholder="kilograms..."
            name="kilograms"
            {...register("kilograms", {
              required: {
                value: true,
                message: "Please enter a kilograms",
              },
            })}
          />
          <p className="text-center text-danger">
            {errors?.kilograms?.message}
          </p>
        </div>
        <div className="mb-3">
          <div className="mb-3">
            <label htmlFor="vacciones" className="form-label">
              Vaccibes:
            </label>
            <textarea
              type="text"
              className="form-control"
              id="vaccibes"
              name="vaccibes"
              placeholder="vaccibes receibed..."
              {...register("vaccibes", {
                required: {
                  value: true,
                  message: "Please enter a vaccibes",
                },
              })}
            />
            <p className="text-center text-danger">
              {errors?.vaccibes?.message}
            </p>
          </div>

          <div className="mb-3">
            <label htmlFor="allergies" className="form-label">
              Allergies:
            </label>
            <textarea
              type="text"
              className="form-control"
              id="allergies"
              name="allergies"
              placeholder="allergies..."
              {...register("allergies", {
                required: {
                  value: true,
                  message: "Please enter a allergies",
                },
              })}
            />
            <p className="text-center text-danger">
              {errors?.allergies?.message}
            </p>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Description of symptoms
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="description"
              {...register("description", {
                required: {
                  value: true,
                  message: "Please enter a description",
                },
              })}
            ></textarea>
            <p className="text-center text-danger">
              {errors?.description?.message}
            </p>
          </div>
          <div className="mb-3">
            <label htmlFor="reason" className="form-label">
              Reason for visit:
            </label>
            <textarea
              id="reason"
              name="reason"
              className="form-control"
              rows="4"
              cols="50"
              placeholder="reason..."
              {...register("reason", {
                required: {
                  value: true,
                  message: "Please enter a reason",
                },
              })}
            ></textarea>
            <p className="text-center text-danger">{errors?.reason?.message}</p>
          </div>
        </div>
        <div className="d-flex justify-content-center align-content-center align-items-center">
          <button className="btn btn-success" onClick={getVeters}>
            Accept
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormAnimal;
