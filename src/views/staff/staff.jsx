import StaffCard from "../../components/staffCard/staffCard";
import Grid from "@mui/material/Grid";
import staffList from "../../views/staff/staffList";

const Staff = () => {
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
        {staffList.map((staff) => (
          <StaffCard key={staff.id} name={staff.name} description={staff.description} imgSrc={staff.avatar} />
        ))}
      </Grid>
    </>
  );
};

export default Staff;
