import CommandCard from "../../components/commandCard/commandCard";
import Grid from "@mui/material/Grid";
import teamList from "./teamList";

const Team = () => {
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
        {teamList.map((staff) => (
          <CommandCard key={staff.id} name={staff.name} description={staff.description} imgSrc={staff.avatar} />
        ))}
      </Grid>
    </>
  );
};

export default Team;
