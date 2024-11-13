import CommandCard from "../../components/commandCard/commandCard";
import Grid from "@mui/material/Grid";
import teamList from "./teamList";
import { useQuery } from "react-query";
import axios from "axios";

const Team = () => {
  async function getTeams() {
    try {
      const response = await axios.get('http://10.4.56.94:3000/team');
      console.log('Данные команд:', response.data);
      return response.data;
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
    }
  }

  const { data, isLoading, isError } = useQuery("teams", getTeams);

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
          <CommandCard
            key={staff.teamid}
            name={staff.team_name}
            description={staff.description}
            imgSrc={teamList[0].avatar}
          />
        ))}
      </Grid>
    </>
  );
};

export default Team;
