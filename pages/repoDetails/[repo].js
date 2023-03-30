import React from 'react'
import style from '../../styles/repo.module.scss'

const Repo = ({ data }) => {
    console.log('data :>> ', data);
    return (
        <div>
            <table className={style.userdata}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Visibility</th>
                        <th>Url</th>
                        <th>Pushed At</th>
                        <th>Updated At</th>
                        
                    </tr>
                </thead>
                <tbody>
                    
                        {
                            data?.map((items, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{items.name}</td>
                                        <td>{items.visibility}</td>
                                        <td>{items.url}</td>
                                        <td>{items.pushed_at}</td>
                                        <td>{items.updated_at}</td>
                                    </tr>
                                )
                            })
                        }
                    
                </tbody>
            </table>
        </div>

    )
}


export async function getServerSideProps({ params }) {

    const res = await fetch(`https://api.github.com/users/${params.repo}/repos`)
    const data = await res.json()
    return { props: { data } }
}

export default Repo