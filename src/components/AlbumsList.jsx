import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from './Skeleton';
import ExpandablePanel from './ExpandablePanel';
import Button from "./Button";

const AlbumsList = ({ user }) => {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();


  const handleAddAlbum = () => {
    addAlbum(user);
  };

  let content;
  if (isLoading) {
    content = <Skeleton times={3} />
  } else if (error) {
    content = <div className="text-red-500">Error fetching albums.</div>
  } else {
    content = data.map(album => {
      const header = <div>{album.title}</div>;

      return <ExpandablePanel key={album.id} header={header} className="flex items-center justify-between my-3">
        List of photos in the album
          <Button className="rounded mt-2">View</Button>
        </ExpandablePanel>
    });
  }

  return <div>
    <div className="m-2 flex flex-row items-center justify-between">
      <h3 className="text-lg font-bold">
      Albums for {user.name}
      </h3>
      <Button loading={results.isLoading} onClick={handleAddAlbum} className="rounded ml-3 text-black bg-teal-300 border-black/80"> + Add Album</Button>
    </div>
    <div>
      {content}
    </div>
    </div>;
}

export default AlbumsList;