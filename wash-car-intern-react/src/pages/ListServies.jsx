import Table from "../components/Table";
import { useRouteLoaderData } from "react-router-dom";
import EmptyTable from "../components/EmptyTable";

const ListServies = () => {
  const { data } = useRouteLoaderData("services");

  return (
    <div className=" flex flex-col items-start mt-4 my-0 mx-auto ">
      {data && data.length ? (
        <Table
          columns={Object.keys(data[0])}
          data={data}
          actionsUrl={["deleteservice","editservice"]}
        />
      ) : (
        <EmptyTable link="addservice" />
      )}
    </div>
  );
};

export default ListServies;
