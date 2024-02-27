const FormAnimal = () => {
  return (
    <div>
      <h3>Form Animal</h3>
      <form>
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
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Select specie:</label>
          <select
            className="form-select"
            aria-label="Default select example"
            name="typeAnimal"
          >
            <option defaultValue={"select"}>....</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Bird">Bird</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="formBread" className="form-label">
            Breed:
          </label>
          <input
            type="text"
            className="form-control"
            id="formBread"
            placeholder="Raza"
            name="breed"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleFormConformAgetrolInput1"
            className="form-label"
          >
            Age:
          </label>
          <input
            type="text"
            className="form-control"
            id="formAge"
            placeholder="name..."
            name="age"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Gender:</label>
          <select
            className="form-select"
            aria-label="Default select example"
            name="gender"
          >
            <option defaultValue={"select"}>....</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Stranger">Stranger</option>
          </select>
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
          />
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
          />
        </div>
        <div className="mb-3">
          <div className="mb-3">
            <label htmlFor="vacciones" className="form-label">
              Vaccines:
            </label>
            <textarea
              type="text"
              className="form-control"
              id="vaccibes"
              name="vaccibes"
              placeholder="vaccibes receibed..."
            />
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
            />
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
            ></textarea>
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
            ></textarea>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormAnimal;
