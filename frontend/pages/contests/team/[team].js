import HeadRPC from '../../../components/HeadRPC'
import { useRouter } from 'next/router'
import Link from 'next/Link'

export default function home({ testUsers1, teamName}) {

    console.log(testUsers1)

    return (

        <div className="container">
            <HeadRPC/>

            <h1>{teamName}</h1><br/><br/>

            <table className="table table-hover table-striped text-center">
                <tbody>
                <tr>
            {testUsers1.map(t=>(
                <td>
                <div className="card" style={{width: "18rem", borderRadius:"10px"}}>
                    <img className="card-img-top" src="..." alt="Inserte foto del miembro"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text"><b>Username:</b> {t.nickname}</p>
                        <p className="card-text"><b>Name:</b> {t.firstName} {t.lastName}</p>
                        <p className="card-text"><b>Email:</b> {t.email}</p>
                        <p className="card-text"><b>Country:</b> {t.country}</p>
                    </div>
                </div>
                </td>
            ))}
                </tr>
                </tbody>
            </table>

        }

        </div>
    )
}

export async function getServerSideProps(ctx){
    const response = await fetch('http://localhost:8081/teamMembers/'+ctx.params.team)
    const testUsers1 = await response.json()
    return {props: { testUsers1: testUsers1 , teamName: ctx.params.team}}
}