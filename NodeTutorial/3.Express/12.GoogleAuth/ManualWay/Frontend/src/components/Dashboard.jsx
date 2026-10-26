import React from "react";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    return <div>No user data found.</div>;
  }
  return (
    <div>
      <h2>Dashboard</h2>
      <p>
        <strong>Name:</strong> {user.userName}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      {user.profile && (
        <div>
          <img
            src={user.profile}
            alt="Profile"
            style={{ width: "100px", borderRadius: "50%" }}
          />
        </div>
      )}
      <button
        onClick={() => {
          localStorage.clear();
          window.location.href = "/login";
        }}
        style={{ marginTop: "20px", padding: "8px 16px", cursor: "pointer" }}
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
