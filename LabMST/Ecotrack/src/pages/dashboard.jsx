import { useState } from "react";
import {
  Paper,
  Typography,
  TextField,
  Select,
  MenuItem,
  Button,
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@mui/material";

export default function TaskManager() {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Low");
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = { title, priority };
    setTasks((prev) => [...prev, newTask]);

    setTitle("");
    setPriority("Low");
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mt: 4, maxWidth: 700 }}>
      <Typography variant="h5" gutterBottom>
        Task Tracker
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3 }}>

        <Typography>Task Title</Typography>
        <TextField
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          size="small"
          sx={{ mb: 2 }}
        />

        <Typography>Priority</Typography>
        <Select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          size="small"
          sx={{ mb: 2, width: 200 }}
        >
          <MenuItem value="Low">Low</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="High">High</MenuItem>
        </Select>

        <Box>
          <Button variant="contained" type="submit">
            Add Task
          </Button>
        </Box>

      </Box>

      <Typography variant="h6" gutterBottom>
        Tasks
      </Typography>

      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Task Title</TableCell>
            <TableCell>Priority</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {tasks.map((task, index) => (
            <TableRow key={index}>
              <TableCell>{task.title}</TableCell>
              <TableCell>{task.priority}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}