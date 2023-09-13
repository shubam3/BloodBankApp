import React from "react";
import Layout from "../../componenets/shared/Layout/Layout";
import { useSelector } from "react-redux/es/hooks/useSelector";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-flex flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Blood Bank App Manager</h3>
          <hr />
          <p>
            Blood banking is the process that takes place in the lab to make
            sure that donated blood, or blood products, are safe before they are
            used in blood transfusions and other medical procedures. Blood
            banking includes typing the blood for transfusion and testing for
            infectious diseases.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            eveniet voluptatibus asperiores ab nulla sint, accusantium ullam
            iste officia adipisci, sed perferendis reprehenderit pariatur
            blanditiis maxime dolorem corrupti natus recusandae minima aliquam?
            Assumenda vitae officiis ducimus, hic delectus numquam corporis,
            iusto aliquam recusandae doloribus, ipsam magni. Tempore quos
            tempora, magnam modi odio eaque eveniet est et? Repellendus
            necessitatibus iusto eveniet, alias nesciunt laborum? Consequatur
            recusandae sunt aperiam quo sit quaerat ducimus sapiente nostrum
            magni dignissimos iure autem dolore incidunt ad quod modi eius nam
            nihil iusto minus praesentium, nobis provident? Numquam odit ipsum
            dignissimos eaque, fugiat, doloremque quos nisi officiis
            necessitatibus a itaque modi id eum vel, iusto quisquam eligendi
            maiores repudiandae? Excepturi earum expedita ad autem debitis sint
            inventore ea quo, beatae nostrum rerum enim et blanditiis sunt
            eligendi accusantium eveniet aliquam hic optio eum? Tempore, ducimus
            at! Magnam quod eaque sapiente modi deserunt debitis ipsam maxime
            unde rerum.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
