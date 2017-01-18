package curso.stream;

import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static java.util.Comparator.comparing;

public class Main {

    public static void main(String[] args) {
        List<Dish> menu = Arrays.asList(
                new Dish("pork", false, 800, Dish.Type.MEAT),
                new Dish("beef", false, 700, Dish.Type.MEAT),
                new Dish("chicken", false, 400, Dish.Type.MEAT),
                new Dish("french fries", true, 530, Dish.Type.OTHER),
                new Dish("rice", true, 350, Dish.Type.OTHER),
                new Dish("season fruit", true, 120, Dish.Type.OTHER),
                new Dish("pizza", true, 550, Dish.Type.OTHER),
                new Dish("prawns", false, 300, Dish.Type.FISH),
                new Dish("salmon", false, 450, Dish.Type.FISH));

        //1. Map
        /*menu.stream()
                .map((d) -> d.getName())
                .collect(Collectors.toList())
                .forEach(System.out::println);*/

        /*menu.stream()
                .map(Dish::getName)
                .map(String::length)
                .forEach(System.out::println);*/

        /*System.out.println(menu.stream()-*
                .mapToInt(Dish::getCalories)
                .sum());*/

        //2. Filter
        /*menu.stream()
                .filter((d) -> d.getType().equals(Dish.Type.MEAT))
                .collect(Collectors.toList())
                .forEach(System.out::println);*/

        //3. Sort

        /*menu.stream()
                .sorted(comparing(Dish::getCalories))
                .forEach(System.out::println);*/

        /*menu.stream()
                .sorted(comparing(Dish::getCalories).reversed())
                .forEach(System.out::println);*/

        /*menu.stream()
                .sorted(comparing(Dish::getCalories).reversed())
                .limit(3)
                .forEach(System.out::println);*/

        //4. Só é atravessado uma única vez

        /*Stream<Dish> stream = menu.stream();
        stream.forEach(System.out::println);
        stream.forEach(System.out::println);*/

        //5 AnyMatch, AllMatch e NoneMatch

        /*System.out.println(menu
                .stream()
                .anyMatch(Dish::isVegetarian));

        System.out.println(menu
                .stream()
                .anyMatch((d) -> !d.isVegetarian()));*/

        /*System.out.println(menu
                .stream()
                .allMatch(Dish::isVegetarian));*/

        /*System.out.println(menu
                .stream()
                .noneMatch(Dish::isVegetarian));*/

        //6. Findfirst and optional

        /*List<Integer> someNumbers = Arrays.asList(1, 2, 3, 4, 5);
        Optional<Integer> firstSquareDivisibleByThree
                = someNumbers.stream()
                .map(x -> x * x)
                .filter(x -> x % 22 == 0)
                .findFirst(); // 9

        //System.out.println(firstSquareDivisibleByThree
        //     .orElse(1));

        System.out.println(firstSquareDivisibleByThree
                .orElseThrow(() -> new RuntimeException("Falha")));*/

    }

}
