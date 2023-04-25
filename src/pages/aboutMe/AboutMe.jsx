import React, { useEffect, useState } from "react";
import "../homePage/homePage.css";
import "./aboutMe.css";
import { Link, useParams } from "react-router-dom";
import { useGetUsers } from "../../hooks/useUsersData";
import { Card } from "antd";
import LoadingComponent from "../../components/loadingComponent/LoadingComponent";

const AboutMe = () => {
  const { id } = useParams();

  const [isLoadingUsersData, usersData, getUsersData] = useGetUsers();
  console.log({ usersData });

  useEffect(() => {
    getUsersData();
  }, []);
  return (
    <div>
      <h1>About-Me</h1>
      {isLoadingUsersData ? (
        <LoadingComponent />
      ) : (
        usersData?.map((user) => (
          <Card title={user.name} key={user.id}>
            <div>{"FirstName : " + user.firstName}</div>
            <div>{"LirstName : " + user.lastName}</div>
            <div>{"Address : " + user.address}</div>
            <div>{"Age : " + user.age}</div>
          </Card>
        ))
      )}
    </div>
  );
};

export default AboutMe;
