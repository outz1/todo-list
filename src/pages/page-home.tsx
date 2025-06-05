import Container from "../components/container";
import TaskList from "../core-components/task-list";
import TaskSummary from "../core-components/task-summary";

export default function PageHome() {
  return <Container as="article" className="space-y-3">
    <header className="flex items-center justify-between">
      <TaskSummary />
    </header>

    <TaskList />
  </Container>
}