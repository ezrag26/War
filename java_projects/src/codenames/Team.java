package codenames;

public class Team {
    private String name;
    private Player clueGiver = new ClueGiver();
    private Player clueReceiver = new ClueReceiver();

    public Team(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
