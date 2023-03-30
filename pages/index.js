import { useRouter } from 'next/router'
import React from 'react'
import { useState } from 'react'
import Head from "next/head";
import style from '../styles/index.module.scss'

const HomeData = () => {
    const router = useRouter()
    const [searchUser, setSearchUser] = useState("");


    function usersData(e) {
        e.preventDefault();
        router.push({ pathname: '/githubUser/[userid]', query: { userid: searchUser } })
    }

    return (
        <>
            <div className={style.maincontainer}>
                <Head>
                    <title>demo</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main>
                    <form className={style.search_form}>
                        <input
                            type="text"
                            placeholder="Search User"
                            value={searchUser}
                            onChange={(e) => setSearchUser(e.target.value)}
                            className={style.search_input}
                        />
                        <button
                            type="submit"
                            className={style.search_btn}
                            onClick={(e) => usersData(e)}>
                            submit
                        </button>
                    </form>
                </main>                
            </div>
        </>
    )
}

export default HomeData