const Accordian = () => {
  return (
    <>
<div className="text-center">
  <h1 className="text-xl font-bold my-6">Frequently Asked Question</h1>
<div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          Most popular shoes 
        </div>
        <div className="collapse-content">
          <p>Nike</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        Most popular shoes 
        </div>
        <div className="collapse-content">
          <p>Adidas</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        Most popular shoes 
        </div>
        <div className="collapse-content">
          <p>Lotto</p>
        </div>
      </div>
</div>
    </>
  );
};

export default Accordian;
