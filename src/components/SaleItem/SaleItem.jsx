const SaleItem = () => {
    return (
    <div className="p-5 text-center bg-warning-subtle" style={{backgroundColor:"FFBA42"}}>
        <div className="container py-5">
            <h1 className="text-body-emphasis pb-3">SALE</h1>
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm">
                    <div className="card-header py-3">
                        <h4 className="my-0 fw-normal">Free</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title">$0<small className="text-body-secondary fw-light">/mo</small></h1>
                        <img className="mt-3 mb-3" src="/logo192.png" alt="item on sale" style={{
                            width: '380px',
                            height: '150px'
                        }} />
                        <button type="button" className="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm">
                    <div className="card-header py-3">
                        <h4 className="my-0 fw-normal">Pro</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title">$15<small className="text-body-secondary fw-light">/mo</small></h1>
                        <img className="mt-3 mb-3" src="/logo192.png" alt="item on sale" style={{
                            width: '380px',
                            height: '150px'
                        }} />
                        <button type="button" className="w-100 btn btn-lg btn-primary">Get started</button>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm border-primary">
                    <div className="card-header py-3 text-bg-primary border-primary">
                        <h4 className="my-0 fw-normal">Enterprise</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title">$29<small className="text-body-secondary fw-light">/mo</small></h1>
                        <img className="mt-3 mb-3" src="/logo192.png" alt="item on sale" style={{
                            width: '380px',
                            height: '150px'
                        }} />
                        <button type="button" className="w-100 btn btn-lg btn-primary">Contact us</button>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    </div>
    );

}

export default SaleItem;