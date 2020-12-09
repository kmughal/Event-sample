import { useRouter } from 'next/router'
import { About, Coordinator, When, Header } from "../components";
import useForms from "../hooks/useForms";
import useFetch from "../hooks/useFetch";

export default function Page() {
  const router = useRouter()
  const { addValidator, addValues, validateForm, isFormValid } = useForms();
  const { categories, responsibles } = useFetch();

  function handleFormSubmit(event) {
    const { formData, isFormValid } = validateForm(event);
    
    if (!isFormValid) return;
    console.log("FormData:", formData);
    window.localStorage.setItem("formData" , JSON.stringify(formData));
    router.push("/SuccessPage");
    event.preventDefault();
  }

  return (
    <>
      <Header headerText="New event"></Header>
      <main>
        <form>
          {!isFormValid && (
            <div className="field-container error-content">
              Form is not valid.
            </div>
          )}
          <About
            categories={categories}
            addValidator={addValidator}
            addValues={addValues}
          />
          <Coordinator
            responsibles={responsibles}
            addValidator={addValidator}
            addValues={addValues}
          />
          <When addValidator={addValidator} addValues={addValues} />
          <div className="field-container align-center">
            <button onClick={handleFormSubmit}>Publish Event</button>
          </div>
        </form>
      </main>
    </>
  );
}

function getJsonData(type) {
  return fetch(`/api/events?type=${type}`).then((r) => r.json());
}
