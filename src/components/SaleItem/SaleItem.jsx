const SaleItem = () => {
    return (
    <div className="p-5 text-center bg-warning-subtle" style={{backgroundColor:"FFBA42"}}>
        <div className="container py-5">
            <h1 className="text-body-emphasis fw-bolder pb-3">SALE</h1>
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm">
                    <div className="card-header py-3 text-bg-warning">
                        <h4 className="my-0 fw-normal">Quarter Horse</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title">$3.99</h1>
                        <img className="img-fluid mt-3 mb-3" src="/HR0348.jpg" alt="item on sale" 
                        style={{
                            width: "250px",
                            height: "206px",
                        }}/>
                        <button type="button" className="w-100 btn btn-lg btn-warning">BUY NOW</button>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm">
                    <div className="card-header py-3 text-bg-warning">
                        <h4 className="my-0 fw-normal">Sea Turtle</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title">$1.45</h1>
                        <img className="img-fluid mt-3 mb-3" src="/sea-turtle.jpg" alt="item on sale"
                        style={{
                            width: "250px",
                            height: "206px",
                        }}/>
                        <button type="button" className="w-100 btn btn-lg btn-warning">BUY NOW</button>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm">
                    <div className="card-header py-3 text-bg-warning">
                        <h4 className="my-0 fw-normal">Peony Bloom</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title">$1.99</h1>
                        <img className="img-fluid mt-3 mb-3" src="/peony-bloom.jpg" alt="item on sale" 
                        style={{
                            width: "250px",
                            height: "206px",
                        }}/>
                        <button type="button" className="w-100 btn btn-lg btn-warning">BUY NOW</button>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    </div>
    );

}

export default SaleItem;