package curso._1_introducao;

public class Maca {

    public String cor;
    public Double peso;

    public Maca(String cor, Double peso) {
        this.cor = cor;
        this.peso = peso;
    }

    public String getCor() {
        return cor;
    }

    public Double getPeso() {
        return peso;
    }

    @Override
    public String toString() {
        return "Maca{" +
                "cor='" + cor + '\'' +
                ", peso=" + peso +
                '}';
    }
}
