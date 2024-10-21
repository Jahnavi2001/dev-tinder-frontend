/* eslint-disable react/prop-types */

const UserCard = ({ user }) => {
  const { firstName, lastName, photoUrl, about, gender, age } = user;
  return (
    <div className="card bg-base-300 w-96 shadow-xl">
      <figure className="h-96">
        <img src={photoUrl} alt="photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        <p>{ age && gender && age + " , " + gender}</p>
        <p>{about}</p>
        <div className="card-actions justify-center flex gap-6 mt-6">
          <button className="btn btn-primary w-32">Ignore</button>
          <button className="btn btn-secondary w-32">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
