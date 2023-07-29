import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { GoTrash } from "react-icons/go";

const AlbumsListItem = ({ album}) => {
    const header = <div>
        <Button className="mr-3 rounded"><GoTrash /></Button>
        {album.title}
        </div>;

    return (
    <ExpandablePanel key={album.id} header={header}>
      List of photos in the album
      </ExpandablePanel>
  );
}

export default AlbumsListItem;