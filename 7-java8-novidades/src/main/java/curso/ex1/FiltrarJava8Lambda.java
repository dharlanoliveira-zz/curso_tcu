package curso.ex1;

import java.util.List;
import java.util.function.Predicate;
import java.util.stream.Collectors;

public class FiltrarJava8Lambda {

    public interface MacasCriterio {
        boolean aceitar(Maca maca);
    }

    public static List<Maca> filtrarMacas(List<Maca> conjunto, Predicate<Maca> predicado) {
        return conjunto.stream()
                //.filter((m) -> predicado.test(m))
                .filter(predicado::test)
                .collect(Collectors.toList());
    }

    public static void imprimir(List<Maca> macas, String label) {
        System.out.println(" --- " + label + " ---");
        //macas.forEach((m) -> System.out.println(m));
        macas.forEach(System.out::println);
    }


}
