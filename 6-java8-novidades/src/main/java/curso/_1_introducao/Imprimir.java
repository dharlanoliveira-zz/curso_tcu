package curso._1_introducao;

import java.util.List;

public class Imprimir {

    public static void imprimir(List<Maca> macas, String label) {
        System.out.println(" --- " + label + " ---");
        for(Maca maca : macas) {
            System.out.println(maca);
        }
    }

}
