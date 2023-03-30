import React from 'react'
import { useRouter } from 'next/router'
import style from '../../styles/userid.module.scss'



const UserData = ({ data }) => {
  console.log('data :>> ', data);
  const router = useRouter()

  function repoData(e) {
    e.preventDefault();
    router.push({ pathname: '/repoDetails/[repo]', query: { repo: data.login } })
  }

  return (
    <>
      <div className={style.user}>
        {/* {data?.node_id}       */}
        <img src={data.avatar_url} alt='' width={300} height={300} /><br />
        <table>
          <tbody>
          <tr><td className={style.user_filed}>Login</td><td className={style.user_data}>{data.login}</td></tr>
          <tr><td className={style.user_filed}>Followers</td><td className={style.user_data}>{data.followers}</td></tr>
          <tr><td className={style.user_filed}>Following</td><td className={style.user_data}>{data.following}</td></tr>
          <tr><td className={style.user_filed}>Public Repo</td><td className={style.user_data}>{data.public_repos}</td></tr>
          </tbody>
          <button className={style.btn} onClick={(e) => repoData(e)}>  Click Here </button>
        </table>
      </div>

    </>
  )
}

export async function getServerSideProps({ params }) {
  console.log('params.userid :>> ', params.userid);
  const res = await fetch(`https://api.github.com/users/${params.userid}`)
  const data = await res.json()
  return { props: { data } }
}

export default UserData