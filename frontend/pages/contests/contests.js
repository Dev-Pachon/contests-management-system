import HeadRPC from '../../components/HeadRPC'
import PastsContests from '../../components/PastsContests'
import Link from "next/link";

export default function Contests() {

    return(

    <div className="container">

        <HeadRPC/>


        <div className="py-1 text-center">

            <Link href="../../..">

                <a className="btn btn-primary" role="button">Logout</a>

            </Link>
            <br></br>
            <br></br>
            <div>
                <input type="text" id="searchField" name="searchField" className="form-control" placeholder="Search..."  />
                <a className="btn btn-primary" role="button">Search</a>


            </div>

        </div>

        {/*<PastsContests/>*/}

    </div>

    )

}