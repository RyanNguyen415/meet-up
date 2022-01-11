import { useState } from "react";

function DeleteMeetupsPage() {
  const [deletee, setDeletee] = useState("delete");
  function deleteFunction() {
    if (deletee === "delete") {
      setDeletee("dont delete");
    } else {
      setDeletee("delete");
    }
  }

  return (
    <div>
      <p>Decide to delete or not</p>
      <button onClick={deleteFunction}>Delete</button>
      {deletee === "delete" ? (
        <p>this will die</p>
      ) : (
        <p>this thing shall live</p>
      )}
    </div>
  );
}
export default DeleteMeetupsPage;
