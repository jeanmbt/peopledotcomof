import { Button, TableRow } from "@mui/material";
import { StyledIndexTableCell } from "../styles/Table/Table.styles";

interface TableCoach {
  coach: { id: number; name: string; specialties: any };
  handleSpecialtyClick: any;
}

export const TableCoach = (props: TableCoach) => {
  const { coach, handleSpecialtyClick } = props;

  return (
    <TableRow key={coach.id + "row"}>
      <StyledIndexTableCell component="th" scope="row" sx={{ paddingX: [1, 1, 2] }}>
        {coach.name}
      </StyledIndexTableCell>
      <StyledIndexTableCell>
        {coach.specialties.map((specialty) => (
          <Button
            onClick={(e) => {
              handleSpecialtyClick(specialty.id);
            }}
            sx={{ margin: "0 0.5em" }}
            key={specialty.id + coach.id + +Math.floor(Math.random() * 999999)}
          >
            {specialty.name}
          </Button>
        ))}
      </StyledIndexTableCell>
      <StyledIndexTableCell>
        <Button size="small" variant="contained" href={`coaches/${coach.id}`}>
          more
        </Button>
      </StyledIndexTableCell>
    </TableRow>
  );
};
