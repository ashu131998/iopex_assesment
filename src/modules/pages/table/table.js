
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../../UserContext";
import { ThemeToggle } from "../toggle/toggle";

export default function UserTable() {

    const { data, setData } = useContext(MyContext);
    const { toggle, setToggle } = useContext(MyContext);
    return (
        <div>

            {data ? <>
                <ThemeToggle toggle = {toggle} setToggle = {setToggle}></ThemeToggle>
                {toggle ? (
                    <div class="bg-white dark:bg-gray-800">
                        <p class="text-gray-600 dark:text-gray-300">
                            <table class="hover:table-fixed">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>NAME</th>
                                        <th>E-MAIL</th>
                                        <th>COMPANY NAME</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map(element => {
                                        return (<tr>
                                            <th>{element.id}</th>
                                            <th>{element.name}</th>
                                            <th>{element.email}</th>
                                            <th>{element.company.name}</th>
                                        </tr>)
                                    })
                                    }
                                </tbody>
                            </table>
                        </p></div>
                ) : <table class="hover:table-fixed">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>E-MAIL</th>
                            <th>COMPANY NAME</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(element => {
                            return (<tr>
                                <th>{element.id}</th>
                                <th>{element.name}</th>
                                <th>{element.email}</th>
                                <th>{element.company.name}</th>
                            </tr>)
                        })}
                    </tbody>
                </table>}
            </> : <></>}
        </div>
    );
}
