import React from "react";

export default function Storage({ storage, ChangeActive }) {
  const HandleChangeActive = () => {
    ChangeActive(storage.id);
  };

  return (
    <div className="storages">
      <button
        className={storage.isActive ? "btn-storage-active" : "btn-storage"}
        onClick={HandleChangeActive}
      >
        <span>{storage.storage}</span>GB
      </button>
    </div>
  );
}
