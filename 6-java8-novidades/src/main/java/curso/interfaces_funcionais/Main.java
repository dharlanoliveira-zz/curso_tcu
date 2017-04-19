package curso.interfaces_funcionais;

import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.function.Supplier;

public class Main {

    static class Classe1{
        private String atributo1 = "";
    }

    static class Classe2{
        private String atributo2 = "";
    }

    public static void main(String[] args) {
        //Predicate<T> -  T -> boolean
        Predicate<Classe1> predicado = (c1) -> c1.atributo1.isEmpty();
        assert predicado.test(new Classe1()) == true;
        //IntPredicate, LongPredicate, DoublePredicate

        //Consumer<T> -	T -> void
        Consumer<Classe1> consumer = (c2) -> System.out.print("void");
        consumer.accept(new Classe1());
        //IntConsumer, LongConsumer, DoubleConsumer

        //Function<T, R> - T -> R
        Function<Classe1,String> funcao = (c1) -> "texto";
        assert funcao.apply(new Classe1()) == "texto";
        //IntFunction<R>, IntToDoubleFunction, IntToLongFunction, LongFunction<R>, LongToDoubleFunction, LongToIntFunction, DoubleFunction<R>, ToIntFunction<T>, ToDoubleFunction<T>, ToLongFunction<T>

        //Supplier<T>	() -> T
        Supplier<Classe1> supplier = () -> new Classe1();
        assert supplier.get() != null;
        //BooleanSupplier, IntSupplier, LongSupplier, DoubleSupplier
    }
}
