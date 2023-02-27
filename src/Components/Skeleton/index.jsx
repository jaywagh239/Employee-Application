const  Skeleton = ({numRows}) => {
    return ( 
        <div className="tableWrapper">
  <table className="table">
    <thead>
    <tr>
        <th style={{ width: "5%" }}>ID</th>
        <th style={{ width: "15%" }}>Name</th>
        <th style={{ width: "20%" }}>Email</th>
        <th style={{ width: "10%" }}>Mobile Number</th>
        <th style={{ width: "15%" }}>Designation</th>
        <th style={{ width: "10%" }}>Department</th>
        <th style={{ width: "20%" }}>Action</th>
      </tr>
    </thead>
    <tbody>
    {Array.from(Array(numRows), (e, i) => {
    return (
        <tr key={i}>
        <td className="loading">
          <div className="bar"></div>
        </td>
        <td className="loading">
          <div className="bar"></div>
        </td>
        <td className="loading">
          <div className="bar"></div>
        </td>
        <td className="loading">
          <div className="bar"></div>
        </td>
        <td className="loading">
          <div className="bar"></div>
        </td>
        <td className="loading">
          <div className="bar"></div>
        </td>
        <td className="loading">
          <div className="bar"></div>
        </td>
      </tr>
    )
  })}
      
    </tbody>
  </table>
</div>
     );
}
 
export default Skeleton;