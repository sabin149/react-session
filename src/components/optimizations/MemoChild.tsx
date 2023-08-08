//memo is used to prevent unnecessary re-rendering of the component
//! this memomized example
const MemoChild = ({ name }: { name: string }) => {
  console.log('Child rendered');
  return (
    <div>
      <h1>Name - {name}</h1>
    </div>
  );
};

export default MemoChild;
