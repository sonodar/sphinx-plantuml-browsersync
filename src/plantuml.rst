.. contents::
   :depth: 2

===============
PlantUML Sample
===============

Use Case Diagram
----------------

.. uml::
   
  actor Consumer
  actor Seller

  Seller --> (Products) : Sell
  Consumer --> (Products) : Buy

Object Diagram
--------------

.. uml::

  object Project
  object Group
  object Member

  Project o- Group
  Group o- Member
  Project o- Member

