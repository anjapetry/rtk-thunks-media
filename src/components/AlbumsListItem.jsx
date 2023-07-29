import Button from "./Button";
import { useRemoveAlbumMutation } from "../store";
import ExpandablePanel from "./ExpandablePanel";
import { GoTrash } from "react-icons/go";

const AlbumsListItem = ({ album }) => {
    const [removeAlbum, results] = useRemoveAlbumMutation();

    const handleRemoveAlbum = () => {
        removeAlbum(album);
    };

    const header = (
        <div>
        <Button
        loading={results.isLoading}
        onClick={handleRemoveAlbum} 
        className="mr-3 rounded">
            <GoTrash />
        </Button>
        {album.title}
        </div>
    );

    return (
    <ExpandablePanel key={album.id} header={header}>
      List of photos in the album
      </ExpandablePanel>
  );
}

export default AlbumsListItem;