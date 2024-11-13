import StaffCard from "../../components/staffCard/staffCard";
import Grid from "@mui/material/Grid";
import staffList from "../../views/staff/staffList";
import axios from "axios";
import { useQuery } from "react-query";

const Staff = () => {
  async function getStaff() {
    try {
      const response = await axios.get("http://10.4.56.94:3000/userprofile");
      // console.log("Данные сотрудников:", response.data);
      return response.data;
    } catch (error) {
      console.error("Ошибка при получении данных сотрудников:", error);
    }
  }

  const { data, isLoading, isError } = useQuery("staff", getStaff);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }
  return (
    <>
      <Grid
        marginTop={5}
        container
        gap={4}
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        alignContent="flex-start"
        wrap="wrap"
        margin={5}
      >
        {data.map((staff) => (
          <StaffCard
            key={staff.userprofileid}
            name={` ${staff.lastname} ${staff.firstname}` }
            description={staff.description}
            imgSrc={staffList[0].avatar}
          />
        ))}
      </Grid>
    </>
  );
};

export default Staff;
