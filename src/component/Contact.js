

export default function Contact(props) {
  return (
    <div clasName="contacts">
    <table>
  <tr>
    <th>Picture</th>
    <th>Name</th>
    <th>Popularity</th>
  </tr>
  <tr>
    <td> <img src={props.imgURL} alt={props.title} /></td>
    <td> </td>
    <td> </td>
  </tr>
  </table>

    </div>
  )
}


