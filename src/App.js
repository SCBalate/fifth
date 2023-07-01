import './App.css';
import HabitList from './Components/ReceipeCard/HabitList';
import { useState } from 'react';
import AddHabitForm from './Components/HabitForm/HabitForm';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

function App() {

  const [habits, setHabits] = useState([
    
      {"id" : 1,"Name": "Christmas pie", "url": "https://images.immediate.co.uk/production/volatile/sites/30/2008/01/Christmas-pie-2ed9223.jpg?quality=90&webp=true&resize=375,341", "Description": "Combine a few key Christmas flavours here to make a pie that both children and adults will adore", "Author": "Mary Cadogan", "Ingredients": ["2 tbsp olive oil", "knob butter", "1 onion, finely chopped", "500g sausagemeat or skinned sausages", "grated zest of 1 lemon", "100g fresh white breadcrumbs", "85g ready-to-eat dried apricots, chopped", "50g chestnut, canned or vacuum-packed, chopped", "2 tsp chopped fresh or 1tsp dried thyme", "100g cranberries, fresh or frozen", "500g boneless, skinless chicken breasts", "500g pack ready-made shortcrust pastry", "beaten egg, to glaze"], "Method": ["Heat oven to 190C/fan 170C/gas 5. Heat 1 tbsp oil and the butter in a frying pan, then add the onion and fry for 5 mins until softened. Cool slightly. Tip the sausagemeat, lemon zest, breadcrumbs, apricots, chestnuts and thyme into a bowl. Add the onion and cranberries, and mix everything together with your hands, adding plenty of pepper and a little salt.", "Cut each chicken breast into three fillets lengthwise and season all over with salt and pepper. Heat the remaining oil in the frying pan, and fry the chicken fillets quickly until browned, about 6-8 mins.", "Roll out two-thirds of the pastry to line a 20-23cm springform or deep loose-based tart tin. Press in half the sausage mix and spread to level. Then add the chicken pieces in one layer and cover with the rest of the sausage. Press down lightly.", "Roll out the remaining pastry. Brush the edges of the pastry with beaten egg and cover with the pastry lid. Pinch the edges to seal, then trim. Brush the top of the pie with egg, then roll out the trimmings to make holly leaf shapes and berries. Decorate the pie and brush again with egg.", "Set the tin on a baking sheet and bake for 50-60 mins, then cool in the tin for 15 mins. Remove and leave to cool completely. Serve with a winter salad and pickles."]},
      {"id" : 2,"Name": "Christmas cupcakes", "url": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-444572_12-4487e3a.jpg?quality=90&webp=true&resize=375,341", "Description": "These beautiful and classy little cakes make lovely gifts, and kids will enjoy decorating them too", "Author": "Sara Buenfeld", "Ingredients": ["200g dark muscovado sugar", "175g butter, chopped", "700g luxury mixed dried fruit", "50g glac\u00e9 cherries", "2 tsp grated fresh root ginger", "zest and juice 1 orange", "100ml dark rum, brandy or orange juice", "85g/3oz pecannuts, roughly chopped", "3 large eggs, beaten", "85g ground almond", "200g plain flour", "\u00bd tsp baking powder", "1 tsp mixed spice", "1 tsp cinnamon", "400g pack ready-rolled marzipan(we used Dr Oetker)", "4 tbsp warm apricotjam or shredless marmalade", "500g pack fondant icingsugar", "icing sugar, for dusting", "6 gold and 6 silver muffincases", "6 gold and 6 silver sugared almonds", "snowflake sprinkles"], "Method": ["Tip the sugar, butter, dried fruit, whole cherries, ginger, orange zest and juice into a large pan. Pour over the rum, brandy or juice, then put on the heat and slowly bring to the boil, stirring frequently to melt the butter. Reduce the heat and bubble gently, uncovered for 10 mins, stirring every now and again to make sure the mixture doesn\u2019t catch on the bottom of the pan. Set aside for 30 mins to cool.", "Stir the nuts, eggs and ground almonds into the fruit, then sift in the flour, baking powder and spices. Stir everything together gently but thoroughly. Your batter is ready.", "Heat oven to 150C/130C fan/gas 2. Scoop the cake mix into 12 deep muffin cases (an ice-cream scoop works well), then level tops with a spoon dipped in hot water. Bake for 35-45 mins until golden and just firm to touch. A skewer inserted should come out clean. Cool on a wire rack.", "Unravel the marzipan onto a work surface lightly dusted with icing sugar. Stamp out 12 rounds, 6cm across. Brush the cake tops with apricot jam, top with a marzipan round and press down lightly.", "Make up the fondant icing to a spreading consistency, then swirl on top of each cupcake. Decorate with sugared almonds and snowflakes, then leave to set. Will keep in a tin for 3 weeks."]},
      {"id" : 3,"Name": "Christmas buns", "url": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-836565_11-719faac.jpg?quality=90&webp=true&resize=375,341", "Description": "Paul Hollywood's fruit rolls can be made ahead then heated up before adding a glossy glaze and citrus icing", "Author": "Paul Hollywood", "Ingredients": ["500g strong white flour, plus extra for dusting", "7g sachet fast-action dried yeast", "300ml milk", "40g unsalted butter, softened at room temperature", "1 egg", "vegetable oil, for greasing", "25g unsalted butter, melted", "75g soft brown sugar", "2 tsp ground cinnamon", "100g dried cranberries", "100g chopped dried apricot", "50g caster sugar", "zest 1 lemon", "200g icing sugar"], "Method": ["Put the flour and 1 tsp salt into a large bowl. Make a well in the centre and add the yeast. Meanwhile, warm the milk and butter in a pan until the butter melts and the mixture is lukewarm. Add the milk mixture and egg to the flour mixture and stir until the contents come together as a soft dough (add extra flour if you need to).", "Tip the dough onto a well-floured surface. Knead for 5 mins, adding more flour if necessary, until the dough is smooth, elastic and no longer sticky.", "Lightly oil a bowl with the vegetable oil. Place the dough in the bowl and turn until covered in oil. Cover the bowl with cling film and set aside in a warm place for 1 hr or until doubled in size. Lightly grease a baking sheet and set aside.", "For the filling, knock the dough back to its original size and turn out onto a lightly floured surface. Roll it into a 1cm-thick rectangle. Brush all over with the melted butter, then sprinkle over the sugar, cinnamon and fruit.", "Roll up the dough into a tight cylinder, cut into 9 x 4cm slices and position on the prepared baking sheet, leaving a little space between. Cover with a tea towel and set aside to rise for 30 mins.", "Heat oven to 190C/170C fan/gas 5. Bake the buns for 20-25 mins or until risen and golden brown. Meanwhile, melt the glaze sugar with 4 tbsp water until syrupy.", "Remove from oven and glaze. Set aside to cool on a wire rack. Once cool, mix the zest and icing sugar with about 2 tbsp water to drizzle over the buns. Serve."]},
      {"id" : 4,"Name": "Christmas cupcakes", "url": "https://images.immediate.co.uk/production/volatile/sites/30/2021/08/christmas-cupcakes-d34f231.jpg?quality=90&webp=true&resize=375,341", "Description": "Made these for the second time today, and I have to say they turned out great! I've got large muffin tins and the mixture made 15 muffins, will definetely make these again at christmas time and decorate festively.", "Author": "Barney Desmazery", "Ingredients": ["280g self-raising flour", "175g golden caster sugar", "175g unsalted butter, very soft", "150g pot fat-free natural yogurt", "1 tsp vanilla extract", "3 eggs", "85g unsalted butter, softened", "1 tsp vanilla extract", "200g icing sugar, sifted", "natural green food colouring(for Christmas trees), sweets, sprinkles and white chocolate stars", "milk and white chocolatebuttons and natural colouring icing pens, available at Asda"], "Method": ["Heat oven to 190C/170 fan/gas 5 and line a 12-hole muffin tin with cake cases. Put all the cake ingredients into a bowl and mix with a whisk until smooth. Spoon the mix into the cases, bake for 25 mins until golden and risen and a skewer comes out clean. Cool on a wire rack.", "For the frosting, beat the butter, vanilla extract and icing sugar until pale and creamy and completely combined. To make snowmen, reindeer and Christmas puddings, first spread the icing over the top of each cake. Then lay the chocolate buttons on top, slicing some buttons into quarters to make ears and hats. Finally, use icing pens for the details. For the Christmas tree, colour the icing with green food colouring and pipe onto the cakes using a star-shaped nozzle, decorate with sweets, sprinkles and white chocolate stars."]},
      {"id" : 5,"Name": "Christmas slaw", "url": "https://images.immediate.co.uk/production/volatile/sites/30/2010/11/Winter-slaw-e23d82a.jpg?quality=90&webp=true&resize=375,341", "Description": "A nutty winter salad which is superhealthy, quick to prepare and finished with a light maple syrup dressing", "Author": "Good Food", "Ingredients": ["2 carrots, halved", "\u00bd white cabbage, shredded", "100g pecans, roughly chopped", "bunch spring onions, sliced", "2 red peppers, deseeded and sliced", "2 tbsp maple syrup", "2 tsp Dijon mustard", "8 tbsp olive oil", "4 tbsp cider vinegar"], "Method": ["Peel strips from the carrots using a vegetable peeler, then mix with the other salad ingredients in a large bowl. Combine all the dressing ingredients in a jam jar, season, then put the lid on and shake well. Toss through the salad when you\u2019re ready to eat it. The salad and dressing will keep separately in the fridge for up to four days."]},
      {"id" : 6,"Name": "Christmas mess", "url": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1163480_10-f4113c0.jpg?quality=90&webp=true&resize=375,341", "Description": "Delicious and a synch to make! Have made this a couple of times as a dinner party dessert, very pretty as a winter alternative to Eton mess. The fact you use frozen fruits is great, I just used a bog standard pack of frozen mixed berries and added some home made blackberry liqueur. Like other people, I added more cinnamon. Thumbs up!", "Author": "Caroline Hire", "Ingredients": ["600ml double cream", "400g Greek yoghurt", "4 tbsp lemon curd", "1 x 500g bag frozen mixed berries(we used Sainsbury's Black Forest fruits)", "4 tbsp icing sugar", "2 tbsp cassis(optional)", "1 pinch cinnamon", "8 meringuenests"], "Method": ["In a small saucepan gently heat the frozen berries, icing sugar and cinnamon until the sugar has dissolved. Remove from the heat, stir in the cassis, if using, and set aside to cool completely.", "Whip the double cream and Greek yogurt until just holding it\u2019s shape, ripple through the lemon curd. Break the meringue nests into a glass bowl, or 8 individual glasses. Spoon over half the cream, then half the berries. Repeat with the remaining cream and berries. Serve immediately."]},
      {"id" : 7,"Name": "Christmas brownies", "url": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chrismas-brownies-cfc47c9.jpg?quality=90&webp=true&resize=375,341", "Description": "can I made these the day before", "Author": "Miriam Nice", "Ingredients": ["200g unsalted buttercut into cubes, plus extra for greasing", "100g dark chocolate, chopped", "100g milk chocolate, chopped", "3 large eggs", "300g golden caster sugar", "100g plain flour", "50g cocoa powder", "\u00bd tsp mixed spice", "9 sprigs rosemary", "9 glac\u00e9 cherries", "1 egg white", "2 tbsp caster sugar", "4 amaretti biscuits, crushed", "9 chocolate truffles(we used Lindt lindor)", "edible gold lustre spray", "1-2 tsp icing sugarfor dusting", "few chocolate buttons", "edible silver balls"], "Method": ["Grease and line a 20cm x 20cm brownie tin. Heat oven to 180C/160C fan/gas 4. Put the butter and both types of chocolate in a heat proof bowl and either melt in the microwave (in 30 second bursts, stirring after each) or set over a pan of barely simmering water, stirring every now and then until the chocolate has melted.", "Leave the chocolate and butter mixture to cool a little while you whisk the eggs and caster sugar in a large bowl using electric beaters. Once the mixture is pale, fluffy and looks like it\u2019s roughly\u00a0doubled in volume, whisk in the melted chocolate. Fold in the flour, cocoa powder and mixed spice until no pockets of flour remain\u00a0then pour\u00a0into your prepared tin. Level the top\u00a0with a spatula and bake for 20-25 mins. The top should look set and shiny but should be a little wobbly if you gently jostle the tin.", "Leave the brownie to cool completely in the tin then chill in the fridge until set. While the brownie cools brush the rosemary sprigs and glac\u00e9\u00a0cherries with egg white, dab off the excess with kitchen paper then dredge in caster sugar until well coated. Leave to dry on a wire rack. Put the chocolate truffles onto a sheet of baking paper or foil then spray with the edible gold lustre.", "Dust the chilled brownie with icing sugar to create a snowy surface and top with amaretti biscuit pieces then poke the crystalised rosemary sprigs into the surface at random intervals (cut the brownie into pieces and dust on icing sugar first, if you like). Nestle a glac\u00e9 cherry or gold truffle alongside the rosemary sprig then add the buttons and silver balls."]},
      
  ])
  // const [archivedHabits, setArchivedHabits] = useState([]);


  // const handleArchiveHabit = (habit) => {
  //   setHabits((prevHabits) => {
  //     const updatedHabits = prevHabits.map((h) => {
  //       if (h.id === habit.id) {
  //         return { ...h, archived: true };
  //       }
  //       return h;
  //     });
  //     const archived = updatedHabits.filter((h) => h.archived);
  //     setArchivedHabits(archived);
  //     return updatedHabits;
  //   });
  // };


  const handleEditHabit = (updatedHabit) => {
    setHabits((prevHabits) => {
      return prevHabits.map((habit) => {
        if (habit.id === updatedHabit.id) {
          return {
            ...habit,
            name: updatedHabit.name,
            goal: updatedHabit.goal,
            frequency: updatedHabit.frequency,
            startDate: updatedHabit.startDate,
            endDate: updatedHabit.endDate,
          };
        }
        return habit;
      });
    });
  };

  const handleDeleteHabit = (habit) => {
    setHabits((prevHabits) => {
      return prevHabits.filter((h) => h.id !== habit.id);
    });
  };

  const handleAddHabit = (newHabit) => {
    debugger
    const habitWithId = {
      ...newHabit,
      id: Math.random().toString(), 
      name:`${newHabit?.name}`
    };
    setHabits((prevHabits) => [...prevHabits, habitWithId]);
  };

 

  return (
    <div className="App">
       <>
         <Router>
         <Routes>
    <Route path="/" element={<HabitList habits={habits} onEditHabit={handleEditHabit} onDeleteHabit={handleDeleteHabit} />}/> 
    
     <Route path="/Add Recepie" element={ <AddHabitForm onAddHabit={handleAddHabit}/>} />
       {/* <ArchivedHabits onArchievehabits={archivedHabits} /> */}
       </Routes>
    </Router></>
      
        
     
     
    </div>
  )
  
}

export default App;
